import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/#projects", { replace: true });
  }, [navigate]);
  return null;
};

export default Projects;
