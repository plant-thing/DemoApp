using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PlantThing.Server.Domain.Sensors;

namespace PlantThing.Server.Infrastructure.EntityTypeConfigurations;

public class SensorReadingEntityConfiguration : IEntityTypeConfiguration<SensorReading>
{
    public void Configure(EntityTypeBuilder<SensorReading> builder)
    {
        builder.HasIndex(x => x.Id)
            .IsUnique();
    }
}
