using Microsoft.EntityFrameworkCore;
using PlantThing.Server.Infrastructure;

namespace PlantThing.Server.Domain.Sensors;

public class SensorRepository(ApplicationDbContext ApplicationDbContext)
{
    public async Task<Sensor?> GetAsync(int id, CancellationToken cancellationToken)
    {
        return await ApplicationDbContext.Sensors
            .Include(x => x.SensorReadings)
            .SingleOrDefaultAsync(x => x.Id == id, cancellationToken: cancellationToken);
    }
}
