namespace PlantThing.Server.Domain.Sensors.Dtos;

public record SensorDto
{
    public int Id { get; set; }

    public required string Serial { get; set; }

    public SensorReadingDto? LastReading { get; set; }
}
