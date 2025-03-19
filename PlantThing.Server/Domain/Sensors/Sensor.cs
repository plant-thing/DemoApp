using PlantThing.Server.Domain.Sensors.Dtos;
using System.Diagnostics.CodeAnalysis;

namespace PlantThing.Server.Domain.Sensors;

public class Sensor
{
    private Sensor() { }

    [SetsRequiredMembers]
    public Sensor(string serial)
    {
        Serial = serial;
    }

    public int Id { get; set; }

    public required string Serial { get; set; }

    private List<SensorReading> _sensorReadings = [];
    public IReadOnlyCollection<SensorReading> SensorReadings
    {
        get
        {
            return _sensorReadings;
        }
        set
        {
            _sensorReadings = [.. value];
        }
    }

    public int AddSensorReading(int light, decimal phLevel, int water, decimal temperature)
    {
        var sensorReading = new SensorReading(light, phLevel, water, temperature);
        _sensorReadings.Add(sensorReading);

        return sensorReading.Id;
    }

    public SensorDto ToDto()
    {
        return new SensorDto()
        {
            Id = Id,
            Serial = Serial,
            LastReading = SensorReadings.OrderByDescending(x => x.Created).FirstOrDefault()?.ToDto()
        };
    }
}
