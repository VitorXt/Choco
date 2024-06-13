import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background-color: brown;
  flex: 1;
  text-align: center;
  align-items: center;
  
`;

export const Button = styled.TouchableOpacity`
  width: 30%;
  padding: 9px;
  align-items: center;
  justify-content: center;
  background-color: #35AAFF;
  border-radius: 3px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: #FFFFFF;
  margin-left: 7px;
`;