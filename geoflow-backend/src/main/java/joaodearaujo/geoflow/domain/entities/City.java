package joaodearaujo.geoflow.domain.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Data
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O nome da cidade é obrigatório")
    private String name;

    @NotBlank(message = "O estado deve ter 2 caracteres (UF)")
    private String state;

    @NotNull
    @Min(-90)
    @Max(90)
    private Double latitude;

    @NotNull
    @Min(-180)
    @Max(180)
    private Double longitude;
}