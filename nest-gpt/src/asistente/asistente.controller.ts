import { Body, Controller, Post } from '@nestjs/common';
import { QuestionDto } from './dtos/question.dto';
import { AsistenteService } from './asistente.service';

@Controller('asistente')
export class AsistenteController {
  constructor(private readonly asistenteService: AsistenteService) {}


  @Post('create-thread')
  async createThread() {
   return await this.asistenteService.createThread();
  }

  @Post('user-question')
  async userQuestion(
    @Body() questionDto: QuestionDto
  ) {
    return await this.asistenteService.userQuestion(questionDto);
  }

}