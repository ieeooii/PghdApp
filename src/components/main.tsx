import * as React from 'react';
import { Button, Image, Platform, View } from 'react-native';
import { mainStyles } from './style';

const mainColor: string = '#5800ff';
const andsigninbtn: string = '#343434';

const logourl: string = 'https://humanscape.io/images/logo-black.png';
const styles = mainStyles;

export interface Props {
  navigation: any;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
export interface State {}

export class Main extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: logourl,
          }}
          style={styles.imagepo}
        />
        <View style={styles.shadow}>
          <View style={[styles.mainbutton, styles.signinplat]}>
            <Button
              title='SING IN'
              onPress={
                () => {
                  this.props.navigation.navigate('SignIn');
                }
                // this.props.onDecrement || (() => {})
              }
              color={Platform.OS === 'ios' ? mainColor : andsigninbtn}
            />
          </View>
          <View style={[styles.mainbutton, styles.signupplat]}>
            <Button
              title='SING UP'
              onPress={
                () => {
                  this.props.navigation.navigate('Signup');
                }
                // this.props.onDecrement || (() => {})
              }
              color={Platform.OS === 'ios' ? 'white' : mainColor}
            />
          </View>
        </View>
      </View>
    );
  }
}
