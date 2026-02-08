import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/#skills", { replace: true });
  }, [navigate]);
  return null;
};

export default Skills;
