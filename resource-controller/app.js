/**
 * Small modeling of using such approach as 'REST Resource'
 * 
 * With this approach we combine login of an accessing to database with
 * domain logic. So its kind of simplification of domain logic.
 * 
 * But with this approach it's a bit dificult or rather waky to use service layer
 * because we either expose such controller as api resource, and than
 * we need some approach to define middlewares for validations, authorizations
 * and others or we use such controllers within our service layer
 * 
 * So as result we could have several architectures:
 * The first one
 * - client
 * - resource controllers (domal layer + data layer)
 * - data source
 * 
 * The second one
 * - client
 * - service layer (application logic)
 * - resource controller (domain logic + data layer)
 * - data source
 * 
 * The third one (especialy useful when we have rich domain model)
 * - client
 * - service layer (application logic)
 * - domain layer (domain specific logic)
 * - data layer (logic manipulation with data)
 * - data source
 * 
 * I think that with metadata pattern it's possible to do it's not so waky
 * but still it's not the same as using middlewares with express-like frameworks
 * 
 * Recap:
 * Such pattern is almoust useles in javascript because we lose easy of usinf muddliwares
 * Possible variations
 * - as part of data mapper layer. In this case we could incapsulate repeating quesy.
 * And it will be espetially useful with relational databases
 * - perhapse possible combinations with domain logic but in this case it's will require serice layer
 * and it will simplification of domain logic and increasing dificulties when we will try to refactor it.
 */

const express = require('express');
const { registerMetadata } = require('./metadata');
const { UserController } = require('./controllers');
const db = require('./db');

db();
const app = express();

registerMetadata({
  app,
  controllers: {
    '/user': UserController,
  },
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listen on ${port} port.`);
});
