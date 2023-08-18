export default{
        template:`
                  <table align="center" border="1px" cellspacing="4px" cellpadding="4px">
                    <thead>
                      <tr>
                        <th>学生编号</th>
                        <th>学生姓名</th>
                        <th>学生年两</th>
                        <th>学生性别</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(stu,stuIndex) of data"
                      :key="stu.id">
                        <td>{{stu.id}}</td>
                        <td>{{stu.name}}</td>
                        <td>{{stu.age}}</td>
                        <td>{{stu.sex}}</td>

                      </tr>
                    </tbody>

                  </table>

        `,
        props:["data"]

}