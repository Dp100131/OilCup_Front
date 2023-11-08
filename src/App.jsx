import './App.css';
import { useState } from 'react';
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Card, CardBody } from "@material-tailwind/react";
import { Alert } from "@material-tailwind/react";

function App() {

  const [isTeamData, setIsTeamData] = useState(false);

  const [isAlert, setIsAlert] = useState(false);

  const [nameTeamA, setNameTeamA] = useState('');
  const [nameTeamB, setNameTeamB] = useState('');

  const handleNameTeamAChange = (event) => {
    setNameTeamA(event.target.value);
  };
  const handleNameTeamBChange = (event) => {
      setNameTeamB(event.target.value);
  };
  const IsTeamDataTrue = () => {
    if(nameTeamA && nameTeamB){
      setIsTeamData(true);
      setIsAlert(false);
    }else{
      setIsAlert(true);
    }
  }; 

  return (
    
    <> 
      {/* Programa */}
      {isAlert ? <Alert open={isAlert} onClose={() => setIsAlert(false)}>Ingrese los nombres de los equipos.</Alert> : null}

      {!isTeamData ? (
        <div className="container mx-auto h-screen" id="teams-data">
          <div className="flex flex-row - justify-center content-center items-center h-full">
            <div className="w-5/12" id="container-team-A">
              <Card>
                <CardBody>
                  <p className="text-2xl font-bold text-center mb-4">EQUIPO A</p>
                  <Input
                    value={nameTeamA}
                    onChange={handleNameTeamAChange}
                    label="Equipo A"
                    className="w-10/12 mx-auto"
                    id="team-A"
                  />
                </CardBody>
              </Card>
            </div>
            <div className="md:w-2/12 flex items-center justify-center">
              <div className="flex justify-center">
                <Button onClick={IsTeamDataTrue} id="save-teams" color="blue">
                  INICIAR
                </Button>
              </div>
            </div>
            <div className="w-5/12" id="container-team-B">
              <Card>
                <CardBody>
                  <p className="text-2xl font-bold text-center mb-4">EQUIPO B</p>
                  <Input
                    value={nameTeamB}
                    onChange={handleNameTeamBChange}
                    label="Equipo B"
                    className="w-10/12 mx-auto"
                    id="team-B"
                  />
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      ) : null}
      {isTeamData ? 
        (<h1>Hello</h1>) 
      : null} 
    </> 

  );
}

export default App
