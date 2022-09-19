import { GridItemType } from '../../types/GridItemType';
import * as C from './styles';
import iconShownOff from '../../svg/b7.svg';
import { items } from '../../data/items';

type Props = {
  item: GridItemType,
  onClick: () => void;
}

export const GridItem = ({item, onClick}: Props) => {
  return(
    <C.Container 
      showBg={item.permanentShown || item.shown}    
      onClick={onClick}>
      {!item.permanentShown && !item.shown &&
        <C.Icon src={iconShownOff}/>
      }

      {(item.permanentShown || item.shown) && item.item !== null &&
        <C.Icon iconOpacity={item.permanentShown || item.shown}
        src={items[item.item].icon} />
      }
    </C.Container>
  );
}