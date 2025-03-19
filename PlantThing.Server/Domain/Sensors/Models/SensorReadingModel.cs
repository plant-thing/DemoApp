using System.ComponentModel.DataAnnotations;

namespace PlantThing.Server.Domain.Sensors.Models;

public record SensorReadingModel
{
    [Range(Constants.MIN_LIGHT, Constants.MAX_LIGHT)]
    public int Light { get; set; }

    [Range(Constants.MIN_PHLEVEL, Constants.MAX_PHLEVEL)]
    public decimal PhLevel { get; set; }

    [Range(Constants.MIN_WATER, Constants.MAX_WATER)]
    public int Water { get; set; }

    [Range(Constants.MIN_TEMPERATURE, Constants.MAX_TEMPERATURE)]
    public decimal Temperature { get; set; }
}
