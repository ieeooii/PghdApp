import { DatePicker, Form, Icon, Picker, Text, View } from 'native-base';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';

const profileBodyStyles = StyleSheet.create({
  innerForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  datePicker: {
    marginTop: -7,
    flexDirection: 'row',
  },
  datePickerIcon: {
    marginLeft: 22,
    marginRight: 16,
    ...Platform.select({
      ios: {
        marginTop: 7,
        fontSize: 21,
      },
      android: {
        marginTop: 10,
        fontSize: 20,
        color: '#767877',
      },
    }),
  },
  LastPickerForm: {
    marginTop: -17,
    ...Platform.select({
      ios: {
        marginRight: 16,
      },
      android: {
        marginRight: 1,
      },
    }),
  },
  LastPicker: {
    // width를 안주면 android에서 클릭 불가능
    width: 130,
  },
});

export interface Props {}
export interface State {
  chosenDate: any;
  language: any;
  selected: any;
  category: any;
}

export class ProfileBody extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      chosenDate: '생년월일을 선택하세요',
      language: null,
      selected: '클릭하세요',
      category: ['환자', '보호자', '의사/약사', '다른질환', '기타'],
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate: any) {
    this.setState({ chosenDate: newDate });
  }

  onValueChange(value: string) {
    this.setState({
      selected: value,
    });
  }

  render() {
    this.onValueChange = this.onValueChange.bind(this);
    const birthDay = this.state.chosenDate.toString().substr(4, 12);
    console.log(birthDay);

    return (
      <Form>
        <Form style={profileBodyStyles.innerForm}>
          <View>
            <Text>생년월일</Text>
          </View>
          <View style={profileBodyStyles.datePicker}>
            <DatePicker
              minimumDate={new Date(1900, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={'en'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'fade'}
              androidMode={'default'}
              placeHolderText='클릭하세요'
              textStyle={{ color: 'blue' }}
              placeHolderTextStyle={{ color: 'blue' }}
              onDateChange={this.setDate}
              disabled={false}
            />
            {Platform.OS === 'ios' ? (
              <Icon
                style={profileBodyStyles.datePickerIcon}
                name='arrow-down'
              />
            ) : (
              <Icon
                style={profileBodyStyles.datePickerIcon}
                name='arrow-dropdown'
              />
            )}
          </View>
        </Form>
        <Form style={profileBodyStyles.innerForm}>
          <View>
            <Text>질환관계</Text>
          </View>
          <Form style={profileBodyStyles.LastPickerForm}>
            <Picker
              style={profileBodyStyles.LastPicker}
              mode='dropdown'
              placeholder='클릭하세요'
              iosIcon={<Icon name='arrow-down' />}
              selectedValue={this.state.selected}
              textStyle={{ color: 'blue' }}
              onValueChange={this.onValueChange}
            >
              {this.state.category.map((val: any) => {
                return <Picker.Item label={val} value={val} key={val} />;
              })}
            </Picker>
          </Form>
        </Form>
      </Form>
    );
  }
}
