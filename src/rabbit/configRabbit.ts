import amqp from "amqplib";

export async function connectToRabbitMQ() {
  try {
    const conn = await amqp.connect({
      protocol: "amqp",
      hostname: "44.221.201.187",
      port: 5672,
      username: "guest",
      password: "guest",
    });
    console.log("Conexión a RabbitMQ exitosa");
    return conn.createChannel();
  } catch (error) {
    console.error("Error al conectar con RabbitMQ:", error);
  }
}
