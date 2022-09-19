import * as C from './App.styles';
import { useEffect, useState } from 'react';

import { items } from './data/items';

import { GridItemType } from './types/GridItemType';

import { InfoItem } from './components/InfoItem';
import { ButtonReset } from './components/ButtonReset';
import { GridItem } from './components/GridItem';

import RestartIcon from './svg/restart.svg';
import { formatTime } from './helpers/formatTime';

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [movements, setMovements] = useState<number>(0);
  const [showCount, setShowCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
     if(playing) setTimeElapsed(timeElapsed + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  useEffect(() => {
    if(showCount === 2) {
      let openedItem = gridItems.filter(item => item.shown === true);
      if(openedItem.length === 2) {

        let tempGrid =  [...gridItems];
        // v1 - se são iguais, torna-los permanentes
        if(openedItem[0].item === openedItem[1].item) {
          for(const i in tempGrid) {
            if(tempGrid[i].shown) {
              tempGrid[i].permanentShown = true;
              tempGrid[i].shown = false;
            }
          }      
          setGridItems(tempGrid);
          setShowCount(0);
        } else { 
          // v2 - se não são iguais
          setTimeout(() => {
          for(const i in tempGrid) {
            tempGrid[i].shown = false;
          }        
          setGridItems(tempGrid);
          setShowCount(0);
          }, 1000)
        }

        setMovements(movements => movements+1);
      }
    }
  }, [showCount, gridItems]);

  useEffect(() => {
    resetAndCreate();
  }, [])

  useEffect(() => {
    if(movements > 0 && gridItems.every(item => item.permanentShown === true)) {
      setPlaying(false);
    }
  }, [movements, gridItems])

  const resetAndCreate = () => {
    // Resetar o jogo.
    setTimeElapsed(0);
    setMovements(0);
    setShowCount(0);

    // Criar o grid.
    // Criando grid vazio
    let tempGrid: GridItemType[] = [];

    for(let i = 0; i < (items.length * 2); i++) {
      tempGrid.push({
        item: null,
        shown: false,
        permanentShown: false   
      });
    }

    // Preenchendo grid
    for(let w = 0; w < 2; w++) {
      for(let i = 0; i < items.length; i++) {
        let pos = -1;
        while(pos<0 || tempGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tempGrid[pos].item = i;
      }
    }

    // Enviar para o state
    setGridItems(tempGrid);

    // Começar o jogo.
    setPlaying(true);
  }

  const handleItemClick = (index: number) => {
    if(playing && index !== null && showCount < 2) {
      let tempGrid: GridItemType[] = [...gridItems];

      if(!tempGrid[index].permanentShown && !tempGrid[index].shown) {
        tempGrid[index].shown = true;
        setShowCount(showCount + 1);
      }

      setGridItems(tempGrid);
    }
  }

  return(
  <C.Container>

    <C.Info>
      <C.HeaderArea>
        <h4>Desenvolvido por 
          <a href="https://github.com/joaothedog/"> João Oliveira</a>
        </h4>
      </C.HeaderArea>

      <C.InfoArea>
        <InfoItem label='Tempo' value={formatTime(timeElapsed)}/>
        <InfoItem label='Movimentos' value={movements.toString()}/>
      </C.InfoArea>

      <ButtonReset label='Recomeçar' icon={RestartIcon} onClick={resetAndCreate}/>

      {!playing && 
      <C.ResultArea>
        Jogo finalizado em {movements} movimentos.
      </C.ResultArea>
      }
    
    </C.Info>

    <C.GridArea>
      <C.Grid>
        {gridItems.map((item, index) => (
          <GridItem 
            key={index}
            item={item}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </C.Grid>
    </C.GridArea>

  </C.Container>
  );
}

export default App;