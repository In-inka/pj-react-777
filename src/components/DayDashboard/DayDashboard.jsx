import { Container, ContentContainerCard, WrapperTitleCard, ValueTextCard, TitleTextCard} from './DayDashboard.styled';


const DayDashboard = () => {

    const calorieIntake = 2200;
    const normOfSports = 110;

    return (
      <Container>
        <Card value={calorieIntake}>Daily calorie intake</Card>
        <Card value={normOfSports}>Daily norm of sports</Card>
      </Container>
    );
}

const Card = ({ value, children }) => {
let icon = '';    
    switch (children) {
        case 'Daily calorie intake':
            icon = <TestIcon w="20px" h="20px" c="#EF8964" mr="8px" />
            break;
        case 'Daily norm of sports':
            icon = <TestIcon w="20px" h="20px" c="#EF8964" mr="8px" />
            break;
    }
    return (
      <ContentContainerCard value={value} title={children}>
        <WrapperTitleCard>
          {icon}
          <TitleTextCard>{children}</TitleTextCard>
        </WrapperTitleCard>
        <ValueTextCard>{value}</ValueTextCard>
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
