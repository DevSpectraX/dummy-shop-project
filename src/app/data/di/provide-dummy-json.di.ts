import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { LocalStoragePort } from '../../core/ports/localStorage.port';
import { LocalStoragePortImp } from '../../core/ports/localStorage.port.imp';
import { AuthRepository } from '../../domain/repositories/auth.repository';
import { SessionRepository } from '../../domain/repositories/session.repositoriy';
import { LoginUseCase } from '../../domain/usecases/login.usecase';
import { SaveSessionUseCase } from '../../domain/usecases/save-session.usecase';
import { ValidateSessionUseCase } from '../../domain/usecases/validate-session.usecase';
import { SessionLocalDataSourceImp } from '../datasources/local/session-local.datasource.imp';
import { AuthRemoteDataSourceImp } from '../datasources/remote/auth-remote.datasource.imp';
import { AuthRemoteDataSource } from '../datasources/source/auth-remote.datasource';
import { SessionLocalDataSource } from '../datasources/source/session-local.datasource';
import { AuthRepositoryImp } from '../repositories/auth.repository.imp';
import { UserDtoToEntity } from '../repositories/auth/mappers/user-dto-to-entity.mapper';
import { SessionRepositoryImp } from '../repositories/session.repository.imp';

export function provideDummyjsonDi(): EnvironmentProviders {
  return makeEnvironmentProviders([
    LoginUseCase,
    UserDtoToEntity,
    SaveSessionUseCase,
    ValidateSessionUseCase,

    { provide: AuthRemoteDataSource, useClass: AuthRemoteDataSourceImp },
    { provide: AuthRepository, useClass: AuthRepositoryImp },
    { provide: LocalStoragePort, useClass: LocalStoragePortImp },
    { provide: SessionRepository, useClass: SessionRepositoryImp },
    { provide: SessionLocalDataSource, useClass: SessionLocalDataSourceImp },
  ]);
}
