using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PlantThing.Server.Domain.Sensors;

namespace PlantThing.Server.Infrastructure.EntityTypeConfigurations;

public class SensorEntityConfiguration : IEntityTypeConfiguration<Sensor>
{
    public void Configure(EntityTypeBuilder<Sensor> builder)
    {
        builder.HasIndex(x => x.Id)
            .IsUnique();
    }
}
