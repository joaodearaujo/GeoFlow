package joaodearaujo.geoflow.domain.entities;
import jakarta.persistence.Embeddable;
import lombok.Data;

@Embeddable
@Data
public class Pack {

    private Double weight;

}
