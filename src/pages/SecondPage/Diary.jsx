import { DaySwitch } from '../../components/DaySwitch/DaySwitch'
import { DiaryProducts } from '../../components/DiaryProducts/DiaryProducts'
import { DiaryExercises } from '../../components/DiaryExercises/DiaryExercises'

const Diary = () => {
  return (
    <div className="container">
      <p>Diary</p>
      <DaySwitch />
      <div style={{ paddingLeft: '50px', paddingTop: '50px'}}>
        <DiaryProducts></DiaryProducts>
        <div style={{marginBottom: '50px'}}></div>
        <DiaryExercises></DiaryExercises>
      </div>
    </div>
  );
};

export { Diary };
