import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  ReferenceField,
  Edit,
  EditButton,
  DeleteButton,
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  Filter,
  SearchInput,
} from "react-admin";

const StudentFilter = (props)=>(
    <Filter {...props}>
        <SearchInput placeholder="search fo a student " source="email" />

    </Filter>
)


export const StudentList = (props) => {
 return ( 
    <List {...props} filters={<StudentFilter />}>
    <Datagrid rowClick="edit">
      <TextField sx={{ backgroundColor: "", display: "none" }} source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <DateField source="email_verified_at" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
      <EditButton path="/post" />
      <DeleteButton />
    </Datagrid>
  </List>)
}


export const StudentCreate = () => (
  <Create title="add new student">
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="password" />
      <TextInput source="password_confirmation" />
      {/* <TextInput source="role" placeholder="teacher" disabled={true}/> */}
    </SimpleForm>
  </Create>
);
export const StudentEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" sx={{display:"none"}} disabled />
      {/* <ReferenceInput source="userId" reference="users" /> */}
      <TextInput source="name" />
      <TextInput source="email" />
    </SimpleForm>
  </Edit>
);