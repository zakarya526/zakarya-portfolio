import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/#experience", { replace: true });
  }, [navigate]);
  return null;
};

export default Experience;
