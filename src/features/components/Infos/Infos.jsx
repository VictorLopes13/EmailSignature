import PropTypes from 'prop-types';
import React, { useState, createRef } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

import Input from '../Input';
import InputMask from '../Input/InputMask';
import { useStyles } from './styles';

const Infos = (props) => {
  const { setUser } = props;
  const classes = useStyles();
  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    jobTitle: '',
    phone: '',
    email: '',
  });
  const [mask, setMask] = useState();
  const ref = createRef();
  const handleChangeField = (field) => (event) => {
    const value = event?.target?.value || '';
    setUserData((prev) => ({ ...prev, [field]: value }));
  };
  setUser(userData);

  const handleMask = (event) => {
    setUserData((prev) => ({
      ...prev,
      phone: event,
    }));
    setMask(event);
  };

  return (
    <div className={classes.container}>
      {/* <div className={classes.header}>Infos</div> */}
      <div className={classes.title}>
        {' '}
        <span>Insira as informações que serão exibidas na assinatura</span>{' '}
      </div>
      <div>
        <Input
          label="Nome"
          value={userData.name}
          onChange={handleChangeField('name')}
        />
        <Input
          label="Sobrenome"
          value={userData.lastName}
          onChange={handleChangeField('lastName')}
        />
        <Input
          label="E-mail"
          value={userData.email}
          onChange={handleChangeField('email')}
        />
        <div className={classes.divMask}>
          <PhoneInput
            inputComponent={InputMask}
            name="phone"
            onChange={handleMask}
            ref={ref}
            international
            countryCallingCodeEditable={false}
            initialValueFormat="national"
            defaultCountry="BR"
            placeholder="Telefone"
            value={mask}
          />
        </div>
      </div>
    </div>
  );
};

Infos.propTypes = {
  setUser: PropTypes.isRequired,
};

export default Infos;
