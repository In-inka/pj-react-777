import { Container, ContentContainerCard, WrapperTitleCard, ValueTextCard, TitleTextCard} from './DayDashboard.styled';


const DayDashboard = () => {
  const calorieIntake = 2200;
  const normOfSports = 110;
  const caloriesConsumed = 707;
  const caloriesBurned = 855;
  const restOfCalories = -100;
  // const restOfCalories = 1493;
  const restOfSports = 30;
  // const restOfSports = 85;

  return (
    <Container>
      <Card value={calorieIntake}>Daily calorie intake</Card>
      <Card value={normOfSports}>Daily norm of sports</Card>
      <Card value={caloriesConsumed}>Calories consumed</Card>
      <Card value={caloriesBurned}>Calories burned</Card>
      <Card value={restOfCalories}>The rest of the calories</Card>
      <Card value={restOfSports}>The rest of sports</Card>
    </Container>
  );
}

const Card = ({ value, children }) => {
        let icon = '';
    let min = ''; 
    let plus = '';
    if (children === 'The rest of sports' && value === 30) plus = '+';
    switch (children) {
      case 'Daily calorie intake':
        icon = <TestIcon w="20px" h="20px" c="#EF8964" mr="8px" />;
        break;
      case 'Daily norm of sports':
        icon = <TestIcon w="20px" h="20px" c="#EF8964" mr="8px" />;
        min = ' min';
        break;
      case 'Calories consumed':
        icon = <TestIcon w="20px" h="20px" c="#EF8964" mr="8px" />;
        break;
      case 'Calories burned':
        icon = <TestIcon w="20px" h="20px" c="#EF8964" mr="8px" />;
        break;
      case 'The rest of the calories':
        icon = <TestIcon w="20px" h="20px" c="#EF8964" mr="8px" />;
        break;
      case 'The rest of sports':
        icon = <TestIcon w="20px" h="20px" c="#EF8964" mr="8px" />;
        min = ' min';
        break;
    }
    return (
      <ContentContainerCard value={value} title={children}>
        <WrapperTitleCard>
          {icon}
          <TitleTextCard>{children}</TitleTextCard>
        </WrapperTitleCard>
            <ValueTextCard>{plus}{value}{min}</ValueTextCard>
      </ContentContainerCard>
    );
}

export { DayDashboard };
    
    
    
    
export const TestIcon = ({ w, h, c, mr }) => {
  return (
    <div
      style={{
        // marginLeft: {ml},

        minWidth: w,
        maxWidth: w,
        minHeight: h,
        maxHeight: h,
        backgroundColor: c,
        marginRight: mr,
        borderWidth: 0,
      }}
    ></div>
  );
};
