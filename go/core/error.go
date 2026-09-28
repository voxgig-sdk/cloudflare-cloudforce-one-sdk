package core

type CloudflareCloudforceOneError struct {
	IsCloudflareCloudforceOneError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCloudflareCloudforceOneError(code string, msg string, ctx *Context) *CloudflareCloudforceOneError {
	return &CloudflareCloudforceOneError{
		IsCloudflareCloudforceOneError: true,
		Sdk:              "CloudflareCloudforceOne",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CloudflareCloudforceOneError) Error() string {
	return e.Msg
}
