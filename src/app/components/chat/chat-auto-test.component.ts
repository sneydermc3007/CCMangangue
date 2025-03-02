import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../services/chat/chat.service';

interface TestResult {
  question: string;
  text: string;
  source: string;
  categoria?: string;
  time?: number;
  links?: Record<string, string>;
}

interface LinkInfo {
  name: string;
  url: string;
}

@Component({
  selector: 'app-chat-auto-test',
  templateUrl: './chat-auto-test.component.html',
  styleUrls: ['./chat-auto-test.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ChatAutoTestComponent implements OnInit {
  isRunning = false;
  currentQuestion = 0;
  currentTestSet: string[] = [];
  results: TestResult[] = [];
  protected readonly Object = Object;

  // Categorías de preguntas para pruebas
  testQuestions = {
    exact: [
      '¿QUÉ DEBO HACER PARA REGISTRAR NUEVOS LIBROS?',
      '¿SE ME PERDIERON LOS LIBROS, QUÉ DEBO HACER PARA REGISTRAR UNOS NUEVOS?',
      '¿EN LA CONTINUACIÓN DE UN LIBRO YA REGISTRADO SE DEBE MANTENER EL MISMO CÓDIGO O SE PUEDE CAMBIAR?',
      '¿Cómo puedo convertirme en miembro de la Cámara de Comercio de Magangué?',
      '¿Cuáles son los beneficios de ser miembro?',
      '¿Cuál es el horario de atención?'
    ],
    variants: [
      '¿Qué ventajas tiene ser miembro de la Cámara de Comercio?',
      '¿Dónde puedo inscribirme como miembro de la Cámara de Comercio de Magangué?',
      '¿A qué hora abren?',
      '¿Cuándo puedo ir a la Cámara de Comercio?',
      '¿Cómo afiliarse a la Cámara de Comercio de Magangué?'
    ],
    partial: [
      'Horario de atención',
      'Beneficios miembro',
      'Registro libros perdidos',
      'Continuación de libros'
    ],
    keywords: [
      'Afiliación',
      'Ventajas',
      'Privilegios',
      'Inscripción',
      'Matrícula',
      'Renovación'
    ],
    links: [
      '¿Cómo puedo convertirme en miembro de la Cámara de Comercio de Magangué?',
      '¿Cuáles son los beneficios de ser miembro?',
      '¿QUÉ DEBO HACER PARA REGISTRAR NUEVOS LIBROS?'
    ],
    rag: [
      '¿Qué es la Cámara de Comercio de Magangué?',
      '¿Cuál es la historia de la Cámara de Comercio?',
      '¿Quién es el presidente actual de la Cámara de Comercio?',
      '¿Cómo puedo contactar al departamento de sistemas?',
      '¿Ofrecen cursos de capacitación empresarial?'
    ],
    complex: [
      '¿Cuáles son los requisitos para registrar una empresa y cuánto cuesta?',
      '¿Dónde están ubicadas las oficinas y cuál es el horario de atención?',
      '¿Cómo puedo renovar mi matrícula mercantil y qué documentos necesito?',
      '¿Qué beneficios tiene ser miembro y cómo puedo afiliarme?'
    ],
    typos: [
      '¿Cuál es el horario de atencion?',
      '¿Como puedo convertirme en miembro de la Camara de Comercio?',
      '¿Cuales son los beneficios de ser miembro?',
      '¿Que debo hacer para registrar nuevos libros?'
    ],
    short: [
      '¿Horario?',
      '¿Registro?',
      '¿Libros?',
      '¿Beneficios?',
      '¿Afiliación?'
    ],
    long: [
      'Estoy interesado en conocer detalladamente cuál es el procedimiento completo que debo seguir para poder registrarme como miembro oficial de la Cámara de Comercio de Magangué, incluyendo todos los documentos necesarios, costos asociados y tiempos de espera para completar el trámite satisfactoriamente.',
      'Me gustaría saber con exactitud cuáles son todos los beneficios específicos que obtendría al convertirme en miembro de la Cámara de Comercio, especialmente aquellos relacionados con capacitaciones, networking, representación gremial y cualquier otro servicio exclusivo que ofrezcan a sus afiliados.'
    ]
  };

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    // Inicialización del componente
  }

  async runAllTests(): Promise<void> {
    this.isRunning = true;
    this.results = [];

    // Combinar todas las categorías de preguntas
    const allQuestions: string[] = Object.values(this.testQuestions).flat();
    this.currentTestSet = allQuestions;

    await this.runTests(allQuestions);

    this.isRunning = false;
  }

  async runCategoryTests(category: string): Promise<void> {
    this.isRunning = true;
    this.results = [];

    const categoryQuestions = this.testQuestions[category as keyof typeof this.testQuestions] || [];
    this.currentTestSet = categoryQuestions;

    await this.runTests(categoryQuestions);

    this.isRunning = false;
  }

  private async runTests(questions: string[]): Promise<void> {
    for (let i = 0; i < questions.length; i++) {
      this.currentQuestion = i;
      const question = questions[i];

      const startTime = performance.now();
      try {
        const answer = await this.chatService.getAnswer(question);
        const endTime = performance.now();

        this.results.push({
          question,
          text: answer.text,
          source: answer.source,
          categoria: answer.categoria,
          time: Math.round(endTime - startTime),
          links: answer.links
        });
      } catch (error) {
        this.results.push({
          question,
          text: 'Error al procesar la pregunta',
          source: 'error'
        });
      }
    }
  }

  getCountBySource(source: string): number {
    return this.results.filter(result => result.source === source).length;
  }

  getCountWithLinks(): number {
    return this.results.filter(result => result.links && Object.keys(result.links).length > 0).length;
  }

  getAverageTime(): number {
    const times = this.results.filter(result => result.time).map(result => result.time as number);
    if (times.length === 0) return 0;

    const sum = times.reduce((acc, time) => acc + time, 0);
    return Math.round(sum / times.length);
  }

  getLinks(links: Record<string, string>): LinkInfo[] {
    return Object.entries(links).map(([key, url]) => {
      // Convertir snake_case a Title Case
      const name = key
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      return { name, url };
    });
  }
}
