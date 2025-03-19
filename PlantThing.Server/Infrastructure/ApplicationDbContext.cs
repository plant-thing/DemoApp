using Microsoft.EntityFrameworkCore;
using PlantThing.Server.Domain.Sensors;
using PlantThing.Server.Infrastructure.EntityTypeConfigurations;

namespace PlantThing.Server.Infrastructure;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
{
    public DbSet<Sensor> Sensors => Set<Sensor>();
    public DbSet<SensorReading> SensorReadins => Set<SensorReading>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.ApplyConfigurationsFromAssembly(typeof(SensorEntityConfiguration).Assembly);
    }
}
