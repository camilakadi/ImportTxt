import React from 'react';
import Styles from './HomeContent.styled';
import { Input } from '@mui/material';
import axios from 'axios';

const HomeContent = () => {
    const [textoSucesso, setTextoSucesso] = React.useState('');

    const showFile = async e => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = async e => {
            const text = e.target.result;
            const textSplited = text.split('|');
            sendData(textSplited);
        };
        reader.readAsText(e.target.files[0]);
    };

    const sendData = async textSplited => {
        const textSlited23 = textSplited[23].replace('\r\n', '');
        const data = {
            token_api:
                'E5U4DdD8VM56YUKeTooZi7pOY2YCmVpSLjqR9cVimSnie8synKpU9dWICFxiiRAERVwiZXgXtrIzhJnm3t40OsHTa5W91LV091DIniNhLsV1IDzSwldlXVHnv4DwkEd7',
            parameters: {
                rate: textSplited[0],
                valor: textSplited[1],
                data_vencimento: textSplited[2],
                instrucoes: [textSplited[3]],
                sacado: {
                    nome: textSplited[4],
                    area_code: textSplited[5],
                    phone_number: textSplited[6],
                    documento: textSplited[7],
                    endereco: textSplited[8],
                    cep: textSplited[9],
                    cidade: textSplited[10],
                    bairro: textSplited[11],
                    uf: textSplited[12],
                },
                email_sacado: textSplited[13],
                limite_pagamento: textSplited[14],
                multa_type: textSplited[15],
                multa_valor: textSplited[16],
                multa_inicio: textSplited[17],
                juros_type: textSplited[18],
                juros_valor: textSplited[19],
                juros_inicio: textSplited[20],
                desconto_type: textSplited[21],
                desconto_valor: [textSplited[22]],
                desconto_fim: [textSlited23],
                reference: '',
            },
        };

        const config = {
            method: 'post',
            url: 'https://apisb.acrox.com.br/billet/set',
            headers: {
                'token-integration': 'lTLK234ukQ6rwE2iyaCEdu17UBNobrZ22oanKhrenopsd',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <>
            <Styles.Wrapper>
                <Styles.Header>
                    <h1>Selecione um .txt</h1>
                </Styles.Header>
                <Input type='file' id='importFile' className='importFile' onChange={e => showFile(e)} />
                <br></br>
                {textoSucesso}
            </Styles.Wrapper>
        </>
    );
};

export default HomeContent;
