# 接口信息
> http://www.dell-lee.com/react/api/


1.list.json?id=1
请求某个分类下的数据列表
入参
|id|number，对应不同的分类信息|
|--|--|
出参
|id|number，每一条数据的唯一标识|
|--|--|
|title|string，列表数据标题信息|

2.detail.json?id=1
请求每个数据标题下的具体信息
出参
|title|string，数据标题信息|
|--|--|
|content|string，包含HTML标签的数据信息|

3.isLogin.json
判断用户是否登录
出参
|login|boolen|
|--|--|

4.login.json?user='admin'&password='admin'
验证账号密码是否正确，默认正确的账号密码为 admin
出参
|login|boolen|
|--|--|

5.logout.json
退出登录
出参
|logout|boolen|
|--|--|
