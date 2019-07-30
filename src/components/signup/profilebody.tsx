import { DatePicker, Form, Icon, Picker, Text } from 'native-base';
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
  selected: any;
  category: any;
}

export class ProfileBody extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      chosenDate: '생년월일을 선택하세요',
      selected: '클릭하세요',
      category: ['환자', '보호자', '의사/약사', '다른질환', '기타'],
    };
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
    this.setDate = this.setDate.bind(this);
    // const birthDay = this.state.chosenDate.toString().substr(4, 12);
    // 생년월일 뽑아내는 코드

    return (
      <Form>
        <Form style={profileBodyStyles.innerForm}>
          <Form>
            <Text>생년월일</Text>
          </Form>
          <Form style={profileBodyStyles.datePicker}>
            <DatePicker
              minimumDate={new Date(1900, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={'korea'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={true}
              animationType={'slide'}
              androidMode={'spinner'}
              placeHolderText='클릭하세요'
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
          </Form>
        </Form>
        <Form style={profileBodyStyles.innerForm}>
          <Form>
            <Text>질환관계</Text>
          </Form>
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
