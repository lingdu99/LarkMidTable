package com.larkmidtable.admin.controller;

import com.larkmidtable.admin.service.JobService;
import com.larkmidtable.core.biz.model.ReturnT;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;


@RestController
@Api(tags = "首页接口")
@RequestMapping("/api")
public class IndexController {

    @Resource
    private JobService jobService;


    @GetMapping("/index")
    @ApiOperation("数据统计功能")
    public ReturnT<Map<String, Integer>> index() {
        return new ReturnT<>(jobService.dashboardInfo());
    }

    @PostMapping("/chartInfo")
    @ApiOperation("图表信息")
    public ReturnT<Map<String, Object>> chartInfo() {
        return jobService.chartInfo();
    }

    @InitBinder
    public void initBinder(WebDataBinder binder) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        dateFormat.setLenient(false);
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
    }

}
