import { IsNumber, IsString } from "class-validator";
import { BaseEntity } from "src/common/entities/base.entity";
import { Excel } from "src/modules/common/excel/excel.decorator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'config'
})
export class WebUser extends BaseEntity {
    /* 参数主键 */
    @PrimaryGeneratedColumn({
        name: 'id',
        comment: '参数主键'
    })
    @IsNumber()
    configId: number

    /* 参数名称 */
    @Column({
        name: 'config_name',
        length: 100,
        default: '',
        comment: '参数名称'
    })
    @IsString()
    configName: string

    /* 参数键名 */
    @Column({
        name: 'config_key',
        length: 100,
        default: '',
        comment: '参数键名'
    })
    @IsString()
    configKey: string

    /* 参数键值 */
    @Column({
        name: 'config_value',
        length: 500,
        default: '',
        comment: '参数键值'
    })
    @IsString()
    configValue: string

    /* 系统内置（Y是 N否） */
    @Column({
        name: 'config_type',
        type: 'char',
        length: 1,
        default: 'N',
        comment: '系统内置（Y是 N否）'
    })
    @IsString()
    configType: string
}