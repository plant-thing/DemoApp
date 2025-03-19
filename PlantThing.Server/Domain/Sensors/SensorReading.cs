using FluentValidation;
using PlantThing.Server.Domain.Sensors.Dtos;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace PlantThing.Server.Domain.Sensors;

public class SensorReading
{
    private SensorReading() { }

    [SetsRequiredMembers]
    public SensorReading(int light, decimal phLevel, int water, decimal temperature)
    {
        Light = light;
        PhLevel = phLevel;
        Water = water;
        Temperature = temperature;
        Created = DateTime.UtcNow;

        Validate();
    }

    public int Id { get; set; }

    public DateTime Created { get; set; }

    public int Light { get; set; }

    [Column(TypeName = "decimal(2,1)")]
    public decimal PhLevel { get; set; }

    public int Water { get; set; }

    [Column(TypeName = "decimal(3,1)")]
    public decimal Temperature { get; set; }

    public SensorReadingDto ToDto()
    {
        return new SensorReadingDto()
        {
            Created = Created,
            Light = Light,
            PhLevel = PhLevel,
            Water = Water,
            Temperature = Temperature
        };
    }

    public void Validate()
    {
        new SensorReadingValidator().ValidateAndThrow(this);
    }
}

public class SensorReadingValidator : AbstractValidator<SensorReading>
{
    public SensorReadingValidator()
    {
        RuleFor(x => x.Light).InclusiveBetween(Constants.MIN_LIGHT, Constants.MAX_LIGHT);
        RuleFor(x => x.PhLevel).InclusiveBetween(Constants.MIN_PHLEVEL, Constants.MAX_PHLEVEL);
        RuleFor(x => x.Water).InclusiveBetween(Constants.MIN_WATER, Constants.MAX_WATER);
        RuleFor(x => x.Temperature).InclusiveBetween(Constants.MIN_TEMPERATURE, Constants.MAX_TEMPERATURE);
    }
}