import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function App() {
  const [id, setId] = useState<null | string>(null);
  const [clickedSwitch, setClickedSwitch] = useState(false);
  const btnClicked = () => setClickedSwitch((prev) => !prev);

  return (
    <Wrapper>
      <Grid>
        {[1, 2, 3, 4].map((i) => (
          <Box
            onClick={() => setId(i + "")}
            key={i}
            layoutId={i + ""}
            whileHover={{
              boxShadow: "0 0 0 5px rgba(0,255,255,0.7)",
              rotate: "180deg",
            }}
          >
            {i === 2 && !clickedSwitch ? <Circle layoutId="circle" /> : null}
            {i === 3 && clickedSwitch ? <Circle layoutId="circle" /> : null}
          </Box>
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box layoutId={id} style={{ backgroundColor: "white" }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
      <Btn
        onClick={btnClicked}
        whileTap={{
          scale: 1.3,
          color: "rgba(255,255,255)",
          background: [
            "linear-gradient(to right, #f0f -200%, #0ff -100%, #f0f 0%, #0ff 100%)",
            "linear-gradient(to right, #f0f -100%, #0ff 0%, #f0f 100%, #0ff 200%)",
            "linear-gradient(to right, #f0f 0%, #0ff 100%, #f0f 200%, #0ff 300%)",
          ],
        }}
      >
        Switch
      </Btn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  background-color: rgb(255, 255, 255, 0.7);
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
`;

const Btn = styled(motion.button)`
  width: 100px;
  height: 40px;
  margin-top: 50px;
  font-size: large;
  font-weight: 600;
  padding: 2px;
  border-radius: 5px;
  border: none;
`;

export default App;
