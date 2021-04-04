import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response, NextFunction } from 'express'

const SecurityMiddleware = (req: Request, res: Response, next: NextFunction) => {
  
  //? Solución momentaria para denegar tráfico directo a Beanstalk. Se redirecciona tráfico desde API Gateway para control de
  //? autorizadores y otros servicios AWS.
  if(process.env.NODE_ENV === 'production') {
    if (req.headers['x-api-key'] !== 'uMYNT2YfDJHEV9dd7R9ZkK5vnRA4wbLnKpuLprDBGF4R7m4MKVdfadzbR8un6cRvdrw4YrvzgeWHEpRvbNpfJpxYvLd7KaEsHfuJ9UWUgdnQFqLPbfSVTyn2xMhuhLDe') {
      res.status(403).end()
      console.log('?', process.env.NODE_ENV)
      return
    }
  }
  next()
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(SecurityMiddleware);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
