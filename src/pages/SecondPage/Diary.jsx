
import { DaySwitch } from '../../components/DaySwitch/DaySwitch'
import { DiaryProducts } from '../../components/DiaryProducts/DiaryProducts'
import { DiaryExercises } from '../../components/DiaryExercises/DiaryExercises'
import { DayDashboard } from '../../components/DayDashboard/DayDashboard'

const Diary = () => {
  return (
    <div className="container">
      <p>Diary</p>
      <DaySwitch />

      <div style={{ paddingLeft: '50px', paddingTop: '50px' }}>
        <DayDashboard></DayDashboard>
      </div>

      <div style={{ paddingLeft: '50px', paddingTop: '50px' }}>
        <DiaryProducts></DiaryProducts>
      </div>

      <div style={{ paddingLeft: '50px', paddingTop: '50px' }}>
        <DiaryExercises></DiaryExercises>
      </div>
    </div>
  );
};

export default Diary;
