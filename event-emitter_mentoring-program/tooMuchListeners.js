const EventEmitter = require('events');

const em = new EventEmitter();

console.log(em.getMaxListeners());

// warning will be emitted about excided amount of listeners
em.setMaxListeners(20);

console.log(em.getMaxListeners());

em.on('test', () => console.log('test event'));
em.on('test', () => console.log('test event'));
em.on('test', () => console.log('test event'));
em.on('test', () => console.log('test event'));
em.on('test', () => console.log('test event'));
em.on('test', () => console.log('test event'));
em.on('test', () => console.log('test event'));
em.on('test', () => console.log('test event'));
em.on('test', () => console.log('test event'));
em.on('test', () => console.log('test event'));
em.on('test', () => console.log('test event'));

em.eventNames().forEach((eventName) => {
  console.log('event ' + eventName);
  console.log('listeners [' + eventName + '] ' + em.listenerCount(eventName));
});
console.log(em.listeners('test'));
console.log(em.eventNames());

em.emit('test');
