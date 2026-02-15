import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faUtensils, faCartPlus, faHeadset } from "@fortawesome/free-solid-svg-icons";

const services = [
  { icon: faUserTie, title: "Master Chefs" },
  { icon: faUtensils, title: "Quality Food" },
  { icon: faCartPlus, title: "Online Order" },
  { icon: faHeadset, title: "24/7 Service" },
];

const Service = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-sm-6 animated fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="service-item rounded pt-3 h-100">
                <div className="p-4">
                  <FontAwesomeIcon
                    icon={service.icon}
                    size="3x"
                    className="text-primary mb-4"
                  />
                  <h5>{service.title}</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                    clita amet diam
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
