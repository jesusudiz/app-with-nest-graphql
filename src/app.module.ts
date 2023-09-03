import {join} from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
//import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
//import { ApolloServerPlugin } from 'apollo-server-plugin-base';
import { ConfigModule } from '@nestjs/config';
import {ProductsModule} from './products/products.module'
//import { MongooseModule } from '@nestjs/mongoose';
//import { DatabaseModule } from './database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AuthModule } from './auth/auth.module';
@Module({
  
  imports: [ConfigModule.forRoot(),GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    
  }),ProductsModule,AuthModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/app') ],
  controllers: [],
   providers: [],
 
})

export class AppModule {}