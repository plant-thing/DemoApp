namespace PlantThing.Server.Domain.Sensors.Dtos;

public class SensorReadingDto
{
    public DateTime Created { get; set; }
    public int Light { get; set; }
    public decimal PhLevel { get; set; }
    public int Water { get; set; }
    public decimal Temperature { get; set; }
}
