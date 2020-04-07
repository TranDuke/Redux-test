/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import { type } from '../redux/actions/authActions';
import {
  increaseCounter,
  decreaseCounter,
} from '../redux/actions/counterActions';

function Counter(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.typedContainer}>
        <Text style={styles.typedText}>Type: {`${props.typed}`} </Text>

        <Button
          title="Change Type"
          onPress={
            props.typed === false
              ? () => props.reduxType(true)
              : () => props.reduxType(false)
          }
          style={styles.typeButton}
        />
      </View>

      <Text style={styles.counterTitle}>Counter</Text>

      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={() => props.reduxIncreaseCounter()}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <Text style={styles.counterText}>{props.counter}</Text>

        <TouchableOpacity onPress={() => props.reduxDecreaseCounter()}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  typedContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  typeButton: {
    marginTop: 20,
    paddingTop: 20,
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typedText: {
    fontSize: 17,
    fontWeight: '400',
    color: '#000',
  },
  counterTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
  },
  counterText: {
    fontSize: 36,
    fontWeight: '400',
    color: '#000',
  },
  buttonText: {
    fontSize: 50,
    fontWeight: '300',
    color: '#007AFF',
    marginLeft: 40,
    marginRight: 40,
  },
});

const mapStateToProps = state => {
  return {
    counter: state.counterReducer.counter,
    typed: state.authReducer.typed,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reduxIncreaseCounter: () => dispatch(increaseCounter()),
    reduxDecreaseCounter: () => dispatch(decreaseCounter()),
    reduxType: e => dispatch(type(e)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
