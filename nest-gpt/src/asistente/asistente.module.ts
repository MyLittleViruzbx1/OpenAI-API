import { Module } from '@nestjs/common';
import { AsistenteService } from './asistente.service';
import { AsistenteController } from './asistente.controller';

@Module({
  controllers: [AsistenteController],
  providers: [AsistenteService],
})
export class AsistenteModule {}
