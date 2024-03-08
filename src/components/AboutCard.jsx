import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const AboutCard = ({ name, role, description, email, github, linkedin }) => {
  return (
    <div className="bg-gray-200 p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <p className="text-gray-600 mb-2">{role}</p>
      <p className="text-gray-800 mb-4">{description}</p>
      <div className="flex items-center space-x-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            <FaGithub size={20} />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            <FaLinkedin size={20} />
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-gray-600 hover:text-gray-800"
          >
            <FaEnvelope size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

export default AboutCard;
