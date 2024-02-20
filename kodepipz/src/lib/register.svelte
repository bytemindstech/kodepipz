<script>
  import {
    Form,
    FormGroup,
    Input,
    Button,
    Container,
    Row,
    Col,
    Card,
  } from "@sveltestrap/sveltestrap";
</script>

<Container>
  <Row>
    <Col class="my-5"
      ><Card body class="shadow p-4"
        ><Form method="POST" action="?/register">
          <FormGroup floating label="username">
            <Input placeholder="username" type="text" name="username" />
          </FormGroup>
          <FormGroup floating label="email">
            <Input placeholder="email" type="email" name="email" />
          </FormGroup>
          <FormGroup floating label="First Name">
            <Input placeholder="First Name" type="text" name="firstName" />
          </FormGroup>
          <FormGroup floating label="Last Name">
            <Input placeholder="Last Name" type="text" name="lastName" />
          </FormGroup>
          <FormGroup floating label="password">
            <Input placeholder="password" type="password" name="password" />
          </FormGroup>
        </Form>
        <Button color="primary" type="submit">Register</Button>
      </Card>
    </Col>
  </Row>
</Container>

<style></style>
