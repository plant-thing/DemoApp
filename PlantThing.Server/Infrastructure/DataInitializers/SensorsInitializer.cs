
using PlantThing.Server.Domain.Sensors;

namespace PlantThing.Server.Infrastructure.DataInitializers;

public class SensorsInitializer(ApplicationDbContext applicationDbContext) : IDataInitializer
{
    public async Task SeedAsync()
    {
        var sensor = new Sensor("M1a C0lLeT73");
        sensor.AddSensorReading(1000, 7, 50, 20);

        applicationDbContext.Sensors.Add(sensor);
        await applicationDbContext.SaveChangesAsync();
    }
}
