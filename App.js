import React from 'react';
import autobind from 'autobind-decorator';  
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, FlatList, Fetch, TouchableOpacity, Picker, Keyboard } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: '',
      worth: '',
      want: '',
      need: '',
    }
  }

  @autobind
  _onPressButton() {
   // if(this.state.player){
      this.calculateScore(parseInt(this.state.grade), parseInt(this.state.worth) , parseInt(this.state.want));
      Keyboard.dismiss();
    //}
  }

  calculateScore(grade, worth, want) {
    result = (want - (grade*((100-worth)/100))) / (worth/100)
    this.setState({
      need: result
    })
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'powderblue'}}>
        <View style={styles.inputView}>
          <TextInput
            style={{height: 40, color: 'black'}}
            textAlign="center"
            placeholder="Type your current grade here"
            placeholderTextColor="black"
            onChangeText={(text) => this.setState({'grade':text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={{height: 40, color: 'black'}}
            textAlign="center"
            placeholder="What percentange is your final exame worth?"
            placeholderTextColor="black"
            onChangeText={(text) => this.setState({'worth':text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={{height: 40, color: 'black'}}
            textAlign="center"
            placeholder="What grade do you want?"
            placeholderTextColor="black"
            onChangeText={(text) => this.setState({'want':text})}
          />
        </View>
        <Button
          style={styles.inputView}
          onPress={this._onPressButton}
          title="Calculate"
        />

        <View style={{marginTop: 40, padding: 10, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{alignItems: 'center', justifyContent: 'center'}}>{'You need to get at least a ' + Math.round(this.state.need) + ' on the final exam.'}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    margin: 10,
    padding: 10,
  }
});
