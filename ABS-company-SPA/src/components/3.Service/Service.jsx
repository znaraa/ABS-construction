import "./Service.css";

const Service = () => {
  const services = [
    {
      title: "Design and Planning",
      description:
        "We offer a wide range of construction services to meet the needs of our clients.",
    },
    {
      title: "Structural Work",
      description:
        "We specialize in structural work, ensuring that all projects are built to last.",
    },
    {
      title: "Project Management",
      description:
        "Our project management team ensures that every project is completed on time and within budget.",
    },
  ];

  return (
    <section id="service" className="service">
      <h2 className="service_title">Our Services</h2>
      <div className="service_grid">
        {services.map((service, index) => (
          <div className="service_item" key={index}>
            <h3 className="service_name">{service.title}</h3>
            <p className="service_description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
// This Service component is a section that lists the services offered by the company.
// It includes a title and descriptions for each service, making it clear what the company specializes in.
