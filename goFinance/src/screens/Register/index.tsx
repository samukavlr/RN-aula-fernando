import React, { useState } from 'react';
import { Modal } from 'react-native';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';
import { InputForm } from '../../components/Form/InputForm';
import { useForm } from 'react-hook-form';

import { 
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes
 } from './styles';

 interface FormData{
  name: string;
  amount: string;
 }

export function Register(){
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  })

  const{
    control,
    handleSubmit,
  }=useForm()

  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false)
  }

  function handleTransactionsTypeSelect(type: 'up' | 'down'){
      setTransactionType(type)
  }

  return (
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Fields>
            <InputForm
              name='name'
              control={control}
              placeholder="Nome"

              />
            <InputForm
              name='amount'
              control={control}

              placeholder="Preço"
              />
            <TransactionsTypes>
              <TransactionTypeButton 
                type='up'
                title='Income'
                onPress={ () => handleTransactionsTypeSelect('up')}
                isActive={transactionType === 'up'}
                />
              <TransactionTypeButton 
                type='down'
                title='Outcome'
                onPress={ () => handleTransactionsTypeSelect('down')}
                isActive={transactionType === 'down'}
                />
            </TransactionsTypes> 
            <CategorySelectButton 
              title="Categoria"
              onPress={handleOpenSelectCategoryModal}
            /> 
          </Fields>
          <Button 
            title="Enviar"
            onPress={handle}
            />

        </Form>
        <Modal visible={categoryModalOpen}>
          <CategorySelect 
              category={category}
              setCategory={setCategory}
              closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>

      </Container>
  );
}
