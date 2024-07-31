import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:<password>@cluster0.mbnpvuk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
  ],
})
export class AppModule {}
