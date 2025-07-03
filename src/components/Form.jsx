import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import '../styles/Form.css';

const schema = yup.object().shape({
  fullName: yup.string().required('Nome completo é obrigatório'),
  email: yup.string().email('Formato de e-mail inválido').required('E-mail é obrigatório'),
  phone: yup.string().required('Telefone é obrigatório'),
  role: yup.string().required('Cargo pretendido é obrigatório'),
  linkedIn: yup.string().url('URL inválida'),
  github: yup.string().url('URL inválida'),
});

const Form = () => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    localStorage.setItem('member', JSON.stringify(data));
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Controller
        name="fullName"
        control={control}
        render={({ field }) => <Input label="Nome Completo" {...field} error={errors.fullName?.message} />}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => <Input label="E-mail" type="email" {...field} error={errors.email?.message} />}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field }) => <Input label="Telefone" {...field} error={errors.phone?.message} />}
      />
      <Controller
        name="role"
        control={control}
        render={({ field }) => (
          <Select label="Cargo Pretendido" {...field} error={errors.role?.message}>
            <option value="">Selecione...</option>
            <option value="Desenvolvedor Frontend">Desenvolvedor Frontend</option>
            <option value="Desenvolvedor Backend">Desenvolvedor Backend</option>
            <option value="Desenvolvedor Full Stack">Desenvolvedor Full Stack</option>
            <option value="Desenvolvedor Mobile">Desenvolvedor Mobile</option>
            <option value="Desenvolvedor de Software">Desenvolvedor de Software</option>
            <option value="Engenheiro de Software">Engenheiro de Software</option>
            <option value="Arquiteto de Software">Arquiteto de Software</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Analista de Sistemas">Analista de Sistemas</option>
            <option value="Analista Programador">Analista Programador</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="Engenheiro de Dados">Engenheiro de Dados</option>
            <option value="QA Engineer">QA Engineer</option>
            <option value="Scrum Master">Scrum Master</option>
            <option value="Product Owner">Product Owner</option>
          </Select>
        )}
      />
      <Controller
        name="linkedIn"
        control={control}
        render={({ field }) => <Input label="LinkedIn" {...field} error={errors.linkedIn?.message} />}
      />
      <Controller
        name="github"
        control={control}
        render={({ field }) => <Input label="GitHub" {...field} error={errors.github?.message} />}
      />
      <Button type="submit">Cadastrar</Button>
    </form>
  );
};

export default Form;